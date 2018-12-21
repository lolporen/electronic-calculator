import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        calculate: state.calculate.calculate,
        total: state.calculate.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const TotalResult = ({total, calculate}) => {
    render: {
        return (
            <div className='total-result'>
                <div className='calculate'>{calculate}</div>
                <div className='calculate-total'>{total}</div>
            </div>
        )
    }
}

const total = connect(
    mapStateToProps,
    mapDispatchToProps
)(TotalResult)

export default total