import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export const metadata = {
  description: "A JS Blog",
  title: BLOG_TITLE
}

async function Home() {
	const postList = await getBlogPostList();

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.mainHeading}>Latest Content:</h1>

			{postList.map((p, i) => (
				<BlogSummaryCard
					slug={p.slug}
					title={p.title}
					abstract={p.abstract}
					publishedOn={p.publishedOn}
					key={i}
				/>
			))}
		</div>
	);
}

export default Home;
