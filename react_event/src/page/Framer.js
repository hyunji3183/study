import React from 'react'
import { motion } from "framer-motion"
import { txt, txt2 } from './animation'

export default function Framer() {

    return (
        <article>
            <h2> Framer Motion</h2>
            <motion.div
                variants={txt}
                initial="init"
                animate="play"
                transition="trans">
                npm install framer-motion<br />
                - import motion from "framer-motion"
            </motion.div>
        </article>
    )
}
