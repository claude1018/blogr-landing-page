import React, { useRef } from 'react';
import * as styles from './Dropdown.module.sass';
import {
  DropdownContainer,
  DropdownItem,
  DropdownItemsContainer,
  DropdownLink,
  DropdownTitle,
} from './Dropdown';
import useInnerWidth from '../useInnerWidth/useInnerWidth';

interface Props {
  menu: {
    title: string;
    items: string[];
  };
}

const RenderDropdown: React.FC<Props> = ({ menu }) => {
  const { title, items } = menu;
  const width = useInnerWidth();
  let isOpen = false;
  const itemsContainer = useRef<HTMLUListElement | null>(null);
  const renderHandler = items.map((item) => {
    const suffix = Math.floor(Math.random() * 9);
    return (
      <DropdownItem key={`${item.toLowerCase()}-${suffix}`}>
        <DropdownLink href={`#${item.toLowerCase()}`}>{item}</DropdownLink>
      </DropdownItem>
    );
  });
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    target.classList.toggle(styles.rotate);
    itemsContainer.current?.classList.toggle(styles.hide);
    if (!isOpen) {
      target.style.color = width < 1110 ? '#6e7176' : '#fff';
      isOpen = true;
    } else {
      target.style.color = width < 1110 ? '#2a3642' : '#fff';
      isOpen = false;
    }
  };
  return (
    <DropdownContainer className={styles.container}>
      <DropdownTitle onClick={onClickHandler} className={styles.icon}>
        {title}
      </DropdownTitle>
      <DropdownItemsContainer ref={itemsContainer} className={styles.hide}>
        {renderHandler}
      </DropdownItemsContainer>
    </DropdownContainer>
  );
};

export default RenderDropdown;
