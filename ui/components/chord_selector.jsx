import {kea} from 'kea'
import PropTypes from 'prop-types'
import {Component} from 'react'
import ChordDropdown from './chord_dropdown'

@kea({
    path: () => ['kea', 'chords'],
    actions: () => ({
        pick_1: chord => ({ chord }),
        pick_quality_1: quality => ({ quality }),
        pick_2: chord => ({ chord }),
        pick_quality_2: quality => ({ quality})
    }),
    reducers: ({actions}) => ({
        chord_1: ['A', PropTypes.string, {[actions.pick_1]: (state, payload) => payload.chord}],
        quality_1: ["", PropTypes.string, {[actions.pick_quality_1]: (state, payload) => payload.quality }],
        chord_2: ['A', PropTypes.string, {[actions.pick_2]: (state, payload) => payload.chord}],
        quality_2: ["", PropTypes.string, {[actions.pick_quality_2]: (state, payload) => payload.quality }]
    })
})

class ChordSelector extends Component {

    render() {
        const {chord} = this.props;
        return (
            <div>
                <ChordDropdown chord={this.props.chord_1}
                               quality={this.props.quality_1}
                               identifier="First"
                               chordHandler={this.actions.pick_1}
                               qualityHandler={this.actions.pick_quality_1}/>
                <ChordDropdown chord={this.props.chord_2}
                               quality={this.props.quality_2}
                               identifier="Second"
                               chordHandler={this.actions.pick_2}
                               qualityHandler={this.actions.pick_quality_2} />
            </div>
        );
    }
}

export default ChordSelector;
