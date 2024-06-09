import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc"; // Must import /rsc in server components....
import { BLOG_TITLE } from "@/constants";
import CodeSnippet from "@/components/CodeSnippet";

export async function generateMetadata({ params }) {
	const { frontmatter } = await loadBlogPost(params.postSlug);
	return {
		title: `${frontmatter.title} - ${BLOG_TITLE}`,
		description: frontmatter.abstract,
	};
}

const components = {
	pre: (props) => <CodeSnippet {...props}>{props.children}</CodeSnippet>,
};

async function BlogPost({ params }) {
	const { frontmatter, content } = await loadBlogPost(params.postSlug);
	return (
		<article className={styles.wrapper}>
			<BlogHero
				title={frontmatter.title}
				publishedOn={frontmatter.publishedOn}
			/>
			<div className={styles.page}>
				<MDXRemote source={content} components={components} />
			</div>
		</article>
	);
}

export default BlogPost;
