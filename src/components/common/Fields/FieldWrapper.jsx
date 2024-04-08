import SelectMenu from './Types/SelectMenu/SelectMenu';
import Checkbox from './Types/Checkbox/Checkbox';
import './FieldWrapper.css';
import Button from '../Button/Button';

function Field({ type, className, content, ...rest } = {}) {
  switch (type) {
    case 'text-area':
      return <textarea {...rest} className={className} />;
    case 'select':
      return <SelectMenu {...rest} className={className} />;
    case 'checkbox':
      return <Checkbox></Checkbox>;
    case 'visual': {
      const contentClass =
        content === 'font'
          ? ` font-field ${rest.value}`
          : content === 'layout'
            ? ` layout-field ${rest.value}`
            : ` saved-data`;
      return (
        <div className={`${className} visual-input${contentClass}`} {...rest}>
          {content === 'saved-data' && rest.display}
        </div>
      );
    }
    default:
      return <input type={type} {...rest} className={className} />;
  }
}
export default function FieldWrapper({
  type = 'text',
  label = '',
  hideLabel = false,
  id,
  onChange,
  onDelete,
  content = '',
  ...rest
}) {
  return (
    <div className="field-wrapper">
      <label
        htmlFor={id}
        {...((hideLabel || type === 'visual') && {
          style: { display: 'none' }
        })}
      >
        {label}
      </label>
      <div className="field-input-container">
        <Field
          type={type}
          id={id}
          className={`field-input`}
          onChange={onChange}
          content={content}
          {...rest}
        />
        {onDelete && (
          <Button
            addDefaultStyling={false}
            text="X"
            className="field-wrapper-delete-button"
            onClick={onDelete}
          />
        )}
      </div>
    </div>
  );
}
