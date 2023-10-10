import { useState } from 'react'

export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue)

    const toggleValue = (value: boolean) => {
        setValue(value)
    }

    return { value, toggleValue }
}
