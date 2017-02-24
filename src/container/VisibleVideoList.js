import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import videoSelect from '../actions/videoSelect';

const mapStateToProps = (state) =>{
    return{
        videos: state.videos
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onVideoSelected: videoSelect}, dispatch);
}
const VisibleVideoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

export default VisibleVideoList;