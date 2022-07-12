export const normalizePostData = posts => {
    let vendorList = [],
        commentList = [],
        postData = {};

    for (let post of posts) {
        postData[post.Id] = { ...post };
        if (post.Vendor && post.VendorId) {
            vendorList.push({ ...post.Vendor });
            delete postData[post.Id].Vendor;
        }
        if (post.PostComments && Array.isArray(post.PostComments) && post.PostComments.length) {
            let commentIds = post.PostComments.map(comment => comment.Id);
            commentList = [...commentList, ...post.PostComments];
            postData[post.Id].PostComments = commentIds.reverse();
        }
    }

    return { vendorList, commentList, postData };
};
