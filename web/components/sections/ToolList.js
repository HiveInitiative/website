import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import styles from './Tools.module.css'
import imageUrl from '../atoms/imageUrl'

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

const Tool = ({ heading, intro, image, fileUrl, url, authors, sources, typeName }) => {
  const link = url ? url.href : false

  return (
    <article className={styles.tool}>
      <img
        src={imageUrl(image, null, 300)}
        alt={image.alt || 'Tool preview'}
        className={styles.image}
      />

      <div className={styles.content}>
        <header className={styles.header}>
          {typeName && <label className={styles.label}>{typeName}</label>}

          <h3 className={styles.heading}>{heading}</h3>

          {authors && (
            <div className={styles.authors}>
              By{' '}
              {authors.map((author, i) => (
                <React.Fragment key={i}>
                  {author.link ? <a href={author.link}>{author.name}</a> : author.name}
                  {listSpacer(i, authors.length)}
                </React.Fragment>
              ))}
            </div>
          )}
        </header>

        <section className={styles.body}>
          {intro && <SimpleBlockContent blocks={intro} className={styles.text} />}
          {link && (
            <a href={link} target="_blank" rel="noopener" className={styles.button}>
              Visit
            </a>
          )}
          {fileUrl && (
            <a href={fileUrl} className={styles.button}>
              Download
            </a>
          )}
        </section>
      </div>
    </article>
  )
}

const listSpacer = (i, len) => {
  const itemsLeft = len - i - 1
  switch (itemsLeft) {
    case 0:
      return '.'
    case 1:
      return ' and '
    default:
      return ', '
  }
}

Tool.propTypes = {
  heading: PropTypes.string,
  typeName: PropTypes.string,
  image: PropTypes.object,
  fileUrl: PropTypes.string,
  url: PropTypes.object,
  intro: PropTypes.arrayOf(PropTypes.object),
  authors: PropTypes.arrayOf(PropTypes.object),
  sources: PropTypes.arrayOf(PropTypes.object),
}

export default ToolList
