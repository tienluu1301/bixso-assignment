import React from 'react'
import { mutate } from 'swr'
import { useForm } from 'react-hook-form'
import {
    TextField,
    Stack,
    Button,
    Dialog as MuiDialog,
    DialogTitle,
    DialogContent,
    Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { BLOG_KEYMUTATE, createBlog, updateBlog } from '@/services/blogAPI'
import { IBlog } from '@/types/backend'
import { IBlogProps } from '../types'

type FormValues = IBlogProps

interface IDialogForm {
    isActive: boolean
    title: string
    initalValue?: IBlog
    onToggleModal: (arg: boolean) => void
}
const Transition = React.forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement
        },
        ref: React.Ref<unknown>,
    ) => <Slide direction="up" ref={ref} {...props} />,
)

const DialogForm: React.FC<IDialogForm> = ({
    isActive,
    onToggleModal,
    title,
    initalValue,
}) => {
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            title: '',
            author: '',
            content: '',
        },
        mode: 'onTouched',
    })

    const onSubmit = async (data: FormValues) => {
        onToggleModal(!isActive)
        let res = null

        if (initalValue) {
            res = await updateBlog({ id: initalValue.id, ...data })
        } else {
            res = await createBlog(data)
        }

        if (res) {
            mutate(BLOG_KEYMUTATE.GET)
        }
    }

    React.useEffect(() => {
        if (isSubmitSuccessful || isActive) {
            reset({ title: '', author: '', content: '' })
        }
    }, [isActive, reset])

    React.useEffect(() => {
        if (initalValue && isActive) {
            console.log('render initalValue')
            reset({
                title: initalValue.title,
                author: initalValue.author,
                content: initalValue.content,
            })
        }
    }, [initalValue, isActive])

    return (
        <MuiDialog
            open={isActive}
            disableScrollLock={true}
            TransitionComponent={Transition}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={3} sx={{ py: 2, my: 2, width: 400 }}>
                        <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            label="Title"
                            {...register('title', {
                                required: {
                                    value: true,
                                    message: 'Title is required',
                                },
                            })}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                        <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            label="Author"
                            {...register('author', {
                                required: {
                                    value: true,
                                    message: 'Author is required',
                                },
                            })}
                            error={!!errors.author}
                            helperText={errors.author?.message}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                            label="Content"
                            {...register('content', {
                                required: {
                                    value: true,
                                    message: 'Content is required',
                                },
                            })}
                            error={!!errors.content}
                            helperText={errors.content?.message}
                        />
                    </Stack>
                    <Stack spacing={1} justifyContent="end" direction="row">
                        <Button
                            onClick={() => onToggleModal(false)}
                            color="warning"
                            variant="contained"
                        >
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained">
                            Subscribe
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </MuiDialog>
    )
}

export default DialogForm
