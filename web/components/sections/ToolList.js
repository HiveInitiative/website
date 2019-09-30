import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './Tools.module.css'
import imageUrl from '../imageUrl'

const ToolList = props => {
  const tools = props.tools
  return (
    <section className={styles.root}>
      {tools && tools.map((tool, index) => <Tool {...tool} key={index} />)}
    </section>
  )
}

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.object),
}

const Tool = ({ heading, type, intro, description, image, fileUrl, url, authors, sources }) => {
  console.log(fileUrl, url)
  return (
    <article className={styles.tool}>
      <img src={imageUrl(image, 300)} className={styles.image} />

      <header className={styles.header}>
        {type && <label className={styles.label}>{type.name}</label>}
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.authors}>
          {authors &&
            authors.map(author => (
              <span className={styles.author} key={author._key}>
                {author.name}
              </span>
            ))}
        </div>
      </header>

      <section>
        {intro && <SimpleBlockContent blocks={intro} />}
        {url && (
          <a href={url.href} className={styles.button}>
            View
          </a>
        )}
        {fileUrl && (
          <a href={fileUrl} className={styles.button}>
            Download
          </a>
        )}
      </section>
    </article>
  )
}

Tool.propTypes = {
  heading: PropTypes.string,
  type: PropTypes.object,
  image: PropTypes.object,
  fileUrl: PropTypes.string,
  url: PropTypes.object,
  intro: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.arrayOf(PropTypes.object),
  authors: PropTypes.arrayOf(PropTypes.object),
  sources: PropTypes.arrayOf(PropTypes.object),
}

export default ToolList
