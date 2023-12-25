import { Store } from "react-notifications-component";
import commentsTypes from "../type/comments";
import useServer from "../../hooks/useServer";
import notificationsSettings from "../../constants/constants";

export function fillComments(comments) {
  return {
    type: commentsTypes.FILL_COMMENTS,
    payload: { comments },
  };
}

export function addNewComment(comment) {
  return {
    type: commentsTypes.ADD_COMMENT,
    payload: { comment },
  };
}

export function removeComment(commentID) {
  return {
    type: commentsTypes.REMOVE_COMMENT,
    payload: { commentID },
  };
}

export function editComment(commentID, updatedComment) {
  return {
    type: commentsTypes.UPDATE_COMMENT,
    payload: { commentID, updatedComment },
  };
}

export const fetchComments = (targetPoint, id) => {
  return async (dispatch) => {
    const { getComments } = useServer();
    try {
      const comments = await getComments(targetPoint, id);
      dispatch(fillComments(comments));
    } catch (error) {
      Store.addNotification({...notificationsSettings.basic, ...notificationsSettings.error, message: error.message});
    }
  };
};

  export const addNewCommentAsync = (newComment, token) => {
  return async (dispatch) => {
    const { addComment } = useServer();
    try {
      const comment = await addComment(newComment, token);
      dispatch(addNewComment(comment));
    } catch (error) {
      Store.addNotification({...notificationsSettings.basic, ...notificationsSettings.error, message: error.message});
    }
  };
};

  export const deleteCommentAsync = (commentID, token) => {
  return async (dispatch) => {
    const { deleteComment } = useServer();
    try {
      const { deletedCommentInfo: {_id: ID} } = await deleteComment(commentID, token);

      dispatch(removeComment(ID));
    } catch (error) {
      Store.addNotification({...notificationsSettings.basic, ...notificationsSettings.error, message: error.message});
    }
  };
};

  export const editCommentAsync = (commentID, newComment, token) => {
  return async (dispatch) => {
    const { updateComment } = useServer();
    try {
      const updatedComment = await updateComment(commentID, newComment, token);
      dispatch(editComment(commentID, updatedComment));
    } catch (error) {
      Store.addNotification({...notificationsSettings.basic, ...notificationsSettings.error, message: error.message});
    }
  };
};