import { useCallback } from 'react';
import {Stack, Text, TextArea} from '@sanity/ui';
import { set, unset } from 'sanity';

export const CustomTextArea = (props) => {
  const { elementProps, schemaType, onChange, value = '' } = props;
  const { validation } = schemaType;
  const { _rules: [, { constraint }] } = validation.find(({ _rules }) => _rules[1].flag === 'max');

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

  return (
    <Stack space={3}>
      <TextArea {...elementProps} onChange={handleChange} rows="10" value={value} />
      <Text accent={value.length > constraint} size={2} padding={[3, 3, 4]}>Characters: {value.length} / {constraint}</Text>
    </Stack>
  )
}
