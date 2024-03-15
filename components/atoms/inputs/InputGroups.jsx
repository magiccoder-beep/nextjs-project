import React from 'react';
import { 
  
  LabelInput, 
  InlineAddOnAndDropdownInput,
  LabelAndHelpTextInput,
  ValidationErrorInput,
  HiddenLabelInput,
  CornerHintInput,
  LeadingIconInput,
  TrailingIconInput,
  AddOnInput,
  InlineAddOnInput,
  KeyboardShortcutInput,
  LeadingAndTrailingAddOnsInput,
  LeadingDropdownInput,
  LeadingIconAndButtonInput,
  SharedBordersInput,


} from './Variants';

// Define the mapping from variant names to components
const VARIANT_COMPONENTS = {
  'label': LabelInput,
  'inline-add-on-and-dropdown': InlineAddOnAndDropdownInput,
  'label-and-help-text': LabelAndHelpTextInput,
  'validation-error': ValidationErrorInput,
  'hidden-label': HiddenLabelInput,
  'corner-hint': CornerHintInput,
  'leading-icon': LeadingIconInput,
  'trailing-icon': TrailingIconInput,
  'add-on': AddOnInput,
  'inline-add-on': InlineAddOnInput,
  'keyboard-shortcut': KeyboardShortcutInput,
  'leading-and-trailing-add-ons': LeadingAndTrailingAddOnsInput,
  'leading-dropdown': LeadingDropdownInput,
  'leading-icon-and-button': LeadingIconAndButtonInput,
  'shared-borders': SharedBordersInput,
};

const InputGroup = ({ variant, ...props }) => {
  // Use the variant to determine which component to render
  // Default to LabelInput if the variant is not found
  const Component = VARIANT_COMPONENTS[variant] || LabelInput;

  return <Component {...props} />;
};

export default InputGroup;
