import { useRef, useImperativeHandle, forwardRef } from 'react';
import classes from './Input.module.css';

// ref from outside (2 ref binding)
/**
 * to get our function work from outside need to wrap it specially
 * our component now is capable to being bounded to a ref
 */
const Input = forwardRef((props, ref) => {

  const inputRef = useRef();

  // ; translation object between internal functionalities and outside world 
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  })

  const activate = () => {
    inputRef.current.focus();
  };

  return <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
    }`}>
    <label htmlFor={props.label}>{props.label}</label>
    <input
      ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
});

export default Input;