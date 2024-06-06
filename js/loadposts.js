// posts/json/posts.json

const defaultPostClass = `penser-post`;
const defaultPostInner = `
<div class="penser-post-header">
	<div class="penser-post-header-user">
		<div class="penser-post-header-icon"></div>
		<div class="penser-post-header-name"></div>
	</div>
	<div class="penser-post-header-menu"></div>
</div>
<div class="penser-post-post"></div>
<div class="penser-post-footer">
	<div class="penser-post-footer-reacts">
		<div class="penser-post-footer-reacts-heart"></div>
		<div class="penser-post-footer-reacts-wholiked"></div>
		<div class="penser-post-footer-reacts-star"></div>
	</div>
	<div class="penser-post-footer-description"></div>
	<div class="penser-post-footer-time"></div>
	<div class="penser-post-footer-comments">
		<div class="penser-post-footer-comments-text"></div>
		<div class="penser-post-footer-comments-icon"></div>
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
		// Default values for post
		let newPost = document.createElement("div");
		newPost.className = defaultPostClass;
		newPost.innerHTML = defaultPostInner;

		// 

		// Adding the post to the page
		postDiv.appendChild(newPost);
	});
});
