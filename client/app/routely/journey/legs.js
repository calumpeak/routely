import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import { Card, CardMedia, CardHeader } from 'material-ui/Card';

/**
 * Responsible for rendering out the legs of the journey
 * We connect to the maps legs store
 *
 * @class Legs
 */
class Legs extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { legs } = this.props;

        return (
            <div>
                {legs.length ?
                    <div style ={{marginTop: '10px'}}>
                        <Divider />
                        {legs.map((legData, index) =>
                            <Card key = {index} style = {{marginTop: '10px', height: 'inherit'}}>
                                <CardHeader
                                    style = {{ paddingBottom: 0 }}
                                    title = {`Start: ${legData.start_address}`}
                                    subtitle = {`${legData.duration.text} | ${legData.distance.text}`}
                                />
                                <CardHeader
                                    style = {{ paddingTop: 0}}
                                    title = {`End: ${legData.end_address}`}
                                />
                            </Card>
                        )}
                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    legs: state.map.legs
});

export default connect(
    mapStateToProps
)(Legs);
