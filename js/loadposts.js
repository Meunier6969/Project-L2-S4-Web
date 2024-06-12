// posts/json/posts.json

const defaultPostClass = `penser-post-border`;
const defaultPostInner = `
	<div class="penser-post">
		<div class="penser-post-header">
			<div class="penser-post-header-user">
				<div class="penser-post-header-icon">
					<img src="../posts/img/No_profile.png" alt="Profile Icon">
				</div>
				<div class="penser-post-header-name">
					<span class="penser-post-header-name-name">PLACEHOLDER NAME</span><br>
					<span class="penser-post-header-name-at">@SOMEONE</span>
				</div>
			</div>
			<div class="penser-post-header-menu">
				<img src="../img/more_points.svg" alt="Profile Icon">
			</div>
		</div>
		<div class="penser-post-post">
			<img src="../posts/img/placeholder_post.png" alt="">
		</div>
		<div class="penser-post-footer">
			<div class="penser-post-footer-reacts">
				<div class="penser-post-footer-reacts-heart">
					<img src="../img/like.svg" alt="Like Icon">
				</div>
				<span class="penser-post-footer-reacts-likesnumber">LIKES</span>
				<div class="penser-post-footer-reacts-star">
					<img src="../img/Interrested.svg" alt="Comment Icon">
				</div>
			</div>
			<div class="penser-post-footer-description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit... (view more)
			</div>
			<div class="penser-post-footer-bottom">
				<div class="penser-post-footer-time">
					TIME ago
				</div>
				<div class="penser-post-footer-comments">
					<span class="penser-post-footer-reacts-commentsnumber">COMMENTS</span>
					<img src="../img/Comments.svg" alt="Comment Icon">
				</div>
			</div>
		</div>
	</div>
`;
const postDiv = document.getElementsByClassName("posts")[0];

async function getPosts () {
	const response = await fetch('../posts/json/posts.json');
	const json = await response.json();

	return json;
}

getPosts().then((response) => {
	response.posts.forEach((post) => {
		console.log(post)

		// Default values for post
		let newPost = document.createElement("div");
		newPost.className = defaultPostClass;
		newPost.innerHTML = defaultPostInner;

		// Adding posts content
		if (post.user !== "")
			newPost.querySelector(".penser-post-header-name-name").innerHTML = post.user
		if (post.user_id !== "")
			newPost.querySelector(".penser-post-header-name-at").innerHTML = "@" + post.user_id
		if (post.user_icon !== "")
			newPost.querySelector(".penser-post-header-icon img").src = "../posts/img/" + post.user_icon

		if (post.category !== "")
			newPost.classList.add(post.category);
		
		if (post.post !== "")
			newPost.querySelector(".penser-post-post img").src = "../posts/img/" + post.post
		if (post.description !== "")
			newPost.querySelector(".penser-post-footer-description").innerHTML = post.description

		newPost.querySelector(".penser-post-footer-reacts-likesnumber").innerHTML = post.likes
		newPost.querySelector(".penser-post-footer-reacts-commentsnumber").innerHTML = post.comments
		newPost.querySelector(".penser-post-footer-time").innerHTML = "6m" + " ago"

		// Adding the post to the page
		postDiv.appendChild(newPost);
	});
});
