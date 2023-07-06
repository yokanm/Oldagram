import { posts } from './export.js'


document.addEventListener('click', function(e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
        console.log(e.target.dataset.like)
    }
})



function handleLikeClick(instaPost) {
    const targetInstaObject = posts.filter(function(insta) {
        return insta.id === instaPost
    })[0]
    console.log(targetInstaObject)

    if (targetInstaObject.isLiked) {
        targetInstaObject.likes--

    } else {
        targetInstaObject.likes++
    }
    targetInstaObject.isLiked = !targetInstaObject.isLiked
    render()
}



function getFeedHtml() {
    let strOfHtml = ''
    posts.forEach(function(post) {

        let icon = ''
        if (post.isLiked) {
            icon = 'liked'
        }

        strOfHtml +=
            `             
              
       
            <section class="user-details">
            
                <img class="avatar" src="${post.avatar}">
                <p>${post.name}<span class="location">${post.location}</span></p>
            </section>
            <img class="posted-img" src="${post.post}"/>
            <div>
                <img class="icon"src="images/icon-heart.png" alt="like button" data-like="${post.id}">
                <img class="icon" src="images/icon-comment.png" alt="comment button" />
                <img class="icon" src="images/icon-dm.png" alt="dm button" />
            </div>
            <p class="likes">${post.likes}</p>
            <p class="comments">${post.username} <span class="user-comment">${post.comment}</span></p>
    `

    })
    return strOfHtml
}

function render() {
    document.getElementById('oldagram').innerHTML = getFeedHtml()
}
render()