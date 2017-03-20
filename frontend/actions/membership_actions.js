import * as MembershipAPIUtil from '../util/membership_api_util';

export const createMembership = forumName => dispatch => (
  MembershipAPIUtil.createMembership(forumName)
);
