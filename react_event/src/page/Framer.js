import React from 'react'
import { motion } from "framer-motion"

export default function Framer() {
    return (
        <article>
            <h2> Framer Motion</h2>
            <motion.div
                initial={{ scale: 2, x: 1000 }}
                animate={{ scale: 2, x: 0 }}>
                npm install framer-motion<br />
                - import {motion} from "framer-motion"
            </motion.div>
        </article>
    )
}
