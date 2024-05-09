import Users from './Users';

import React from 'react';
import { connect } from 'react-redux';

import { currentPage, followingInProgress, getUsersSelector, isFetching, pageSize, totalUserCount } from '../../redux/selector/users-selector';
import { follow, getUsers, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';



class UsersApiComponent extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   };

   onPageChanged = (pageNumbber) => {
      this.props.getUsers(pageNumbber, this.props.pageSize);
   };

   render() {

      return <>
         {this.props.isFetching ? <Preloader />
            : <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               peopleDate={this.props.peopleDate}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
            />
         }

      </>
   };
};
const mapStateToProps = (state) => {
   return {
      peopleDate: getUsersSelector(state),
      pageSize: pageSize(state),
      totalUserCount: totalUserCount(state),
      currentPage: currentPage(state),
      isFetching: isFetching(state),
      followingInProgress: followingInProgress(state),
   }
};




export default connect(mapStateToProps, {
   follow,
   unfollow,
   getUsers,
})(UsersApiComponent);

