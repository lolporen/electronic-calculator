import { connect } from 'react-redux'
import { toggleNumber, toggleOprator, calculateTotal } from '../actions'
import NumberList from '../components/NumberList'

const mapStateToProps = (state) => {
    return {
        total: state.calculate.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onNumberClick: (number) => {
        dispatch(toggleNumber(number))
      },
      onToggleOpratorClick: (oprator) => {
        dispatch(toggleOprator(oprator))
      },
      onCalculateTotalClick: () => {
        dispatch(calculateTotal())
      }
    }
  }

const NumberBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberList)

export default NumberBox