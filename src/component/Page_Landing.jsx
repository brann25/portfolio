import React from 'react'
import { useLayoutEffect } from 'react';
import './Page_Landing.scss';
import { Link } from 'react-router-dom';
//images
import headerBg from './svg/landing-page-bg.svg'
import arrow from '../component/svg/Arrow.svg'
import gDrive from './svg/Gdriveicon.svg'
import walkingGif from './svg/figure_walk.gif'
import p1Banner from './svg/p1-banner.svg'
import p2Banner from './svg/p2-banner.svg'
import p3Banner from './svg/p3-banner.svg'
import pt1Banner from './svg/natlib.svg'
import pt2Banner from './svg/cinema.svg'
import pt3Banner from './svg/toyshop.svg'
import pt4Banner from './svg/graphicdsgn.svg'

export default function Page_Landing() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
  return (
    <>
    <div className="page-wrapper">
    Bannawit@umich.edu | Glad to see you here! 
    </div>
    </>
  )
}
