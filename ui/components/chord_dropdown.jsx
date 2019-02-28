import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const ChordDropdown = ({chord, quality, identifier, chordHandler, qualityHandler}) => {

    const chordNames = ["A", "C", "D", "E", "F", "G"]
    const qualities = ["", "m", "7", "maj7", "min7"]

    const createMenuItem = (name, index) => {
        return <MenuItem key={index} value={name}>{name}</MenuItem>;
    }

    return <div>
        <InputLabel htmlFor={`chord-${identifier}`}>{`${identifier} Chord`}</InputLabel>
        <Select value={chord} onChange={e => {chordHandler(e.target.value)}}
                inputProps={{name: 'chord', id: `chord-${identifier}`}} >
            {chordNames.map(createMenuItem)}
        </Select>
        <Select value={quality} onChange={e => {qualityHandler(e.target.value)}}
                inputProps={{name: 'quality', id: `quality-${identifier}`}} >
            {qualities.map(createMenuItem)}
        </Select>
    </div>
}

export default ChordDropdown
