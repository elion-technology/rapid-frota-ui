import * as Select from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import styles from "./select.module.css"

export function SelectRoot({ value, onValueChange, children }) {
    return (
        <Select.Root value={value} onValueChange={onValueChange}>
            {children}
        </Select.Root>
    )
}

export function SelectTrigger() {
    return (
        <Select.Trigger className={styles.trigger}>
            <Select.Value />
            <Select.Icon>
                <ChevronDown size={16} />
            </Select.Icon>
        </Select.Trigger>
    )
}

export function SelectContent({ children }) {
    return (
        <Select.Portal>
            <Select.Content className={styles.content}
                position="popper"
                side="bottom"
                align="start"
                sideOffset={6}
            >
                <Select.Viewport className={styles.viewport}>
                    {children}
                </Select.Viewport>
            </Select.Content>
        </Select.Portal>
    )
}

export function SelectItem({ value, children }) {
    return (
        <Select.Item value={value} className={styles.item}>
            <Select.ItemIndicator className={styles.check}>
                <Check size={16} />
            </Select.ItemIndicator>
            <Select.ItemText>{children}</Select.ItemText>
        </Select.Item>
    )
}

