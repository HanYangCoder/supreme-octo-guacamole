"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost/supreme-octo-guacamole-wp-site/wp-json/wp/v2/posts?_embed')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    console.log(posts);

    return (
        <>
            <div className="page-wrap px-10 py-16 flex flex-col items-center">
                <div className="inner-page-wrap w-full max-w-[1400px]">
                    <div className='text-center text-4xl font-bold mb-8'>Blog</div>
                    <div className="">
                        <ul className='flex flex-wrap gap-x-5 gap-y-12'>
                            {posts.map(post => (
                            <li key={post.id} className='w-full max-w-[calc((100%-40px)/3)]'>
                                <Link href={post.link}>
                                    <div className="">
                                        <div className="mb-4">
                                            <Image
                                                src={
                                                    post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                                                    ? post._embedded['wp:featuredmedia'][0].source_url
                                                    : 'http://localhost/supreme-octo-guacamole-wp-site/wp-content/uploads/2025/06/jdm-cars-6.jpg'
                                                }
                                                alt={post.title.rendered}
                                                width={400}
                                                height={300}
                                                className='h-[300px] w-full object-cover'
                                            />
                                        </div>
                                        <div className="text-2xl font-bold mb-2.5">
                                            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
                                        </div>
                                        <div className="text-base">
                                            <div className='line-clamp-2'
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt.rendered
                                                    .replace(/\[\s*(&hellip;|\.{3})\s*\]/gi, '') // replaces [...] or [&hellip;]
                                                    .replace(/&hellip;/gi, '') // fallback if &hellip; is outside brackets
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage