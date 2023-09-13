import { useCallback } from 'react';
import {Stack, Text, TextArea} from '@sanity/ui';
import { set, unset } from 'sanity';

export const CustomTextArea = (props) => {
  const { elementProps, onChange, value = '' } = props;

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

  return (
    <Stack space={3}>
      <TextArea {...elementProps} onChange={handleChange} rows="10" value={value} />
      <Text size={2} padding={[3, 3, 4]}>Characters: {value.length}</Text>
    </Stack>
  )
}
