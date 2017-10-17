import {handleChange, handleKeyDown} from '../UserSearch';

describe('UserSearch', () => {
  describe('handleKeyDown', () => {
    it('calls stopPropagation and preventDefault', () => {
      const event = new KeyboardEvent('keydown', {keyCode: 13});
      event.stopPropagation = jest.fn();
      event.preventDefault = jest.fn();
      handleKeyDown({event, onSubmit: jest.fn(), setValue: jest.fn(), value: ''});
      expect(event.stopPropagation).toHaveBeenCalledTimes(1);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls onSubmit with the current value and setValue with an empty string when Enter keyCode is sent', () => {
      const event = new KeyboardEvent('keydown', {keyCode: 13});
      const value = 'gaearon';
      const onSubmit = jest.fn();
      const setValue = jest.fn();
      handleKeyDown({event, onSubmit, setValue, value});
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(value);
      expect(setValue).toHaveBeenCalledTimes(1);
      expect(setValue).toHaveBeenCalledWith('');
    });

    it('does nothing when keyCode !== 13', () => {
      const onSubmit = jest.fn();
      let event;

      event = new KeyboardEvent('keydown', {keyCode: 65});
      event.stopPropagation = jest.fn();
      event.preventDefault = jest.fn();
      handleKeyDown({event, onSubmit: jest.fn(), value: ''});
      expect(event.stopPropagation).toHaveBeenCalledTimes(0);
      expect(event.preventDefault).toHaveBeenCalledTimes(0);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      event = new KeyboardEvent('keydown', {keyCode: 128});
      event.stopPropagation = jest.fn();
      event.preventDefault = jest.fn();
      handleKeyDown({event, onSubmit: jest.fn(), value: ''});
      expect(event.stopPropagation).toHaveBeenCalledTimes(0);
      expect(event.preventDefault).toHaveBeenCalledTimes(0);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      event = new KeyboardEvent('keydown', {keyCode: 12});
      event.stopPropagation = jest.fn();
      event.preventDefault = jest.fn();
      handleKeyDown({event, onSubmit: jest.fn(), value: ''});
      expect(event.stopPropagation).toHaveBeenCalledTimes(0);
      expect(event.preventDefault).toHaveBeenCalledTimes(0);
      expect(onSubmit).toHaveBeenCalledTimes(0);
    });
  });

  describe('handleChange', () => {
    it('calls setValue function with event value', () => {
      const value = 'gaearon';
      const setValue = jest.fn();

      const input = document.createElement('input');
      input.type = 'text';
      input.value = value;
      input.onchange = event => handleChange({event, setValue});
      input.dispatchEvent(new Event('change'));

      expect(setValue).toHaveBeenCalledTimes(1);
      expect(setValue).toHaveBeenCalledWith(value);
    });

    it('lowercases the event value', () => {
      const valueUpper = 'GaeAROn';
      const valueLower = 'gaearon';
      const setValue = jest.fn();

      const input = document.createElement('input');
      input.type = 'text';
      input.value = valueUpper;
      input.onchange = event => handleChange({event, setValue});
      input.dispatchEvent(new Event('change'));

      expect(setValue).toHaveBeenCalledTimes(1);
      expect(setValue).toHaveBeenCalledWith(valueLower);
    });
  });
});