import {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class NewCombo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            achord: "",
            bchord: ""
        }

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = (save) => {
        if (save) this.props.onOk([this.state.achord, this.state.bchord])
        this.setState({ open: false, achord: "", bchord: "" });
    }

    render() {
        const { classes } = this.props
        return (
            <div>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title" >
            <DialogTitle id="form-dialog-title">
                Add a new combination
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You will be able to track your practice sessions.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="achord"
                    label="A Chord"
                    type="text"
                    value={this.state.achord}
                    onChange={({target}) =>
                        this.setState({achord: target.value})
                    }
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="bchord"
                    label="B Chord"
                    type="text"
                    value={this.state.bchord}
                    onChange={({target}) =>
                        this.setState({bchord: target.value})
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.handleClose(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => this.handleClose(true)} color="primary">
                    Ok
                </Button>
            </DialogActions>
                </Dialog>
                <Button variant="outlined"
                        className={classes.button}
                        onClick={this.handleClickOpen}>
                    Add Combination
                </Button>
            </div>
        )
    }
}

NewCombo.propTypes = {
    onOk: PropTypes.func
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

export default withStyles(styles) (NewCombo)
