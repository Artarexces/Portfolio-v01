import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import avatare from './assets/Avatare.png'

gsap.registerPlugin(Draggable)

const AvatarDraggeable = () => {
    const avatarRef = useRef(null)
    useEffect(() => {
        if (avatarRef.current) {
            Draggable.create(avatarRef.current, {
                type: 'x,y',
                throwProps: true,
                inertia: true,
                onPress: () => {
                    gsap.to(avatarRef.current, {
                        scale: 1,
                        duration: 0.2,
                        ease: 'bounce'
                    })
                },
                onPressOut: () => {
                    gsap.to(avatarRef.current, {
                        scale: 1.3,
                        duration: 0.2,
                        ease: 'bounce'
                    })
                }
            })
        }
    }, [])
    return (
        <div 
        ref={avatarRef}
        className='absolute right-80 top-15 cursor-grab select-none'>
            <img src={avatare} alt="Avatar" className='w-70 h-96 drop-shadow-lg' />
        </div>
    )   
}

export default AvatarDraggeable