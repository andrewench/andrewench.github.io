import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any
    }
  }
}

enum IconVariants {
  filled = 'filled',
  outline = 'outline',
  sharp = 'sharp',
  none = 'none'
}

interface IAppIcon {
  name: string;
  variant?: IconVariants;
}

const AppIcon = ({ name, variant = IconVariants.outline}: IAppIcon) => {
  return (
    <ion-icon name={variant === 'none' ? name : `${name}-${variant}`} />
  )
}

interface IAppLink {
  to: string;
  label: string;
}

const AppLink = ({ to, label }: IAppLink) => {
  return (
    <Link to={to} draggable='false'>{label}</Link>
  )
}

interface IAppNavHashLink {
  className: string;
  to: string;
  label: string;
}

const AppNavHashLink = ({
  className,
  to,
  label
}: IAppNavHashLink) => {
  return (
    <NavHashLink
      smooth
      className={className}
      to={to}
      draggable='false'
    >{label}</NavHashLink>
  )
}

interface IAppImg {
  src: string;
  alt: string;
  className?: string;
}

const AppImg = ({ src, alt, className = '', ...props }: IAppImg) => {
  return (
    <img className={className} src={src} alt={alt} draggable={false} {...props} />
  )
}

export {
  AppIcon,
  IconVariants,
  AppLink,
  AppNavHashLink,
  AppImg
}