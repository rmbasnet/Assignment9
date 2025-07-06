import React from 'react'
import styles from "../styles/FormBody.module.css"
import ArtForm from './ArtForm'

function FormBody({ artData }) {
    return (
        <div className={styles.mainBody}>
            <p style={{ fontSize: "40px", color: "white" }}>Picture Name</p>
            <hr />

            <span>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ullam dolores, et dolorum, ut impedit fugiat consequatur, reiciendis odio aliquam ipsum velit. Enim alias, quas illum modi amet soluta ipsam.</p>
            </span>

            <ArtForm artData={artData} />
        </div>
    )
}

export default FormBody