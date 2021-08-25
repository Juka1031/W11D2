import { connect } from "react-redux";
import { removeStep,receiveStep } from "../../actions/step_actions";
import StepListItem from "./step_list"


const mDTP =  (dispatch) => ({
    removeStep: step => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))
})


export default connect(
    null,
    mDTP
)(StepListItem);