import React from 'react'
import Log from './Log'
import { connect } from 'react-redux'

const LogBoard = (props) => {
    return (
        <div className="col-md-4 float-right">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td><b>Logs</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.logs.map(log => {
                            return (<Log key={log.id} log={log.value}/>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        logs: state.logs
    }
}

export default connect(mapStateToProps)(LogBoard);
