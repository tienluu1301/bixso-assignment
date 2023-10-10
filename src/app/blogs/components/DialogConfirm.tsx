import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Stack,
    Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { IBlogSelected } from '../types'

interface IDialogConfirm {
    title: string
    isActive: boolean
    data?: IBlogSelected
    onToggleModal: (arg: boolean) => void
    onConfirm: (arg: number) => void
}

const Transition = React.forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement
        },
        ref: React.Ref<unknown>,
    ) => <Slide direction="up" ref={ref} {...props} />,
)

const DialogConfirm: React.FC<IDialogConfirm> = ({
    title,
    isActive,
    data,
    onToggleModal,
    onConfirm,
}) => {
    return (
        <Dialog
            open={isActive}
            disableScrollLock={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => onToggleModal(false)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title" color="text.warning">
                {title}
            </DialogTitle>
            {data && (
                <DialogContent>
                    <Typography sx={{ mb: 5 }}>
                        Confirm Deletion of{' '}
                        <span style={{ color: '#ed6c02' }}>{data.title} </span>
                        by
                        <span style={{ color: '#ed6c02' }}> {data.author}</span>
                    </Typography>
                    <Stack spacing={2} direction="row" justifyContent="end">
                        <Button
                            color="inherit"
                            onClick={() => onToggleModal(false)}
                        >
                            Disagree
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => onConfirm(data.id)}
                        >
                            Agree
                        </Button>
                    </Stack>
                </DialogContent>
            )}
        </Dialog>
    )
}

export default DialogConfirm
