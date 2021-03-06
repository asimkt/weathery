/* eslint-disable */
import debounce from 'lodash/debounce';
import uniqBy from 'lodash/uniqBy';
import React, { useState, useCallback } from 'react';
import './styles.css';
import { getCachedApiResponse } from './utils';

// Component will do some kind of caching in Browser.
// The server should cache the apiPrefix also to handle millions of requests per hour.
export const TypeAhead = ({
  apiPrefix,
  name = 'default',
  onOptionSelect,
  opts,
  ...restProps
}) => {
  const {
    errorMsg = 'Please select an option',
    labelKey,
    optionsParent,
    label,
  } = opts;
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [shouldBlurClose, setBlurClose] = useState(true);
  const debouncedApiCall = useCallback(
    debounce(async (value) => {
      if (apiPrefix) {
        setLoading(true);
        const response = value
          ? await getCachedApiResponse(`${apiPrefix}${value}`)
          : {};

        setLoading(false);
        const apiOptions = optionsParent ? response[optionsParent] : response;

        if (apiOptions && Symbol.iterator in Object(apiOptions)) {
          const uniqueOptions = uniqBy(apiOptions, labelKey);
          const optionsWithId = uniqueOptions.map((option) => { 
            return {
              ...option,
              id: `${option.lat}__${option.lon}`
            }
          })
          setOptions(optionsWithId);
        }
      }
    }, 500),
    [],
  );
  const handleInput = (e) => {
    setIsOpen(true);
    // Set active as null so that user won't accidently select old value
    setActive(null);
    setActiveIndex(null);
    setInputValue(e.target.value);
    debouncedApiCall(e.target.value);
  };
  const handleKeyDown = (e) => {
    let newIndex;

    if ((e.which === 38 || e.which === 40) && !isLoading) {
      // No active option -> set first option as active
      if (!active) {
        newIndex = 0;
      }
      newIndex = e.which === 38 ? activeIndex - 1 : activeIndex + 1;
      applyActiveOption(options[newIndex], newIndex);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!options[0]) {
      setError(errorMsg);

      return;
    }
    setIsOpen(false);
    callOnSubmit();
  };
  const callOnSubmit = () => {
    // Callback the onOptionSelect prop, so that parent will get the selected option.
    if (active) {
      typeof onOptionSelect === 'function' && onOptionSelect(active);
    }
  };
  const applyActiveOption = (opt, index) => {
    opt = opt || options[0];
    // Small performance improvement as I don't want to call this again and again.
    if (opt == active) {
      return;
    }
    setActive(opt);
    setActiveIndex(index || 0);
    setInputValue(labelKey ? opt[labelKey] : opt);
  };

  return (
    <div className="TypeAhead" {...restProps}>
      <form onSubmit={onSubmit}>
        <label htmlFor={`inputTypeAhead-${name}`}>
          Search {label ? `for ${label}` : ''}
        </label>
        <input
          onBlur={() => {
            if (shouldBlurClose) {
              setIsOpen(false);
            }
          }}
          onKeyDown={handleKeyDown}
          value={inputValue}
          type="text"
          id={`inputTypeAhead-${name}`}
          autoComplete="off"
          onChange={handleInput}
          className="TypeAhead__input"
          role="combobox"
          aria-auto-complete="both"
          placeholder={label}
          aria-owns={`results-${name}`}
          aria-activedescendant={
            active && (labelKey ? active[labelKey] : active)
          }
        />
        {error ? <p>{errorMsg}</p> : null}
      </form>
      {isOpen ? (
        <ul
          className="TypeAhead__options"
          id={`results-${name}`}
          role="listbox"
          onMouseEnter={() => {
            // So that `li` click won't remove the component from DOM.
            setBlurClose(false);
          }}
          onMouseLeave={() => {
            setBlurClose(true);
          }}
        >
          {isLoading ? (
            <li className="TypeAhead__option">'Loading..'</li>
          ) : (
            options.slice(0, 10).map((option, index) => (
              <li
                key={index}
                onMouseOver={() => {
                  applyActiveOption(option, index);
                }}
                onClick={() => {
                  callOnSubmit();
                  setBlurClose(true);
                  setIsOpen(false);
                }}
                id={labelKey ? option[labelKey] : option}
                className={`TypeAhead__option ${
                  active && option.id && option.id === active.id
                    ? 'TypeAhead__option--selected'
                    : ''
                }`}
                role="option"
              >
                {labelKey ? option[labelKey] : option}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
};
