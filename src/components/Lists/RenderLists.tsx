import React from 'react';
import { ListItem, ListTitle, ListLink } from './Lists';

interface props {
  menu: {
    title: string;
    items: string[];
  };
  className: string;
}

const RenderLists: React.FC<props> = ({ menu, className }) => {
  return (
    <div className={className}>
      <ListTitle>{menu.title}</ListTitle>
      <ul>
        {menu.items.map((item) => {
          const suffix = Math.floor(Math.random() * 99);
          return (
            <>
              <ListItem className="my-1" key={`${item}-99${suffix}`}>
                <ListLink href={`#${item.toLowerCase()}`}>{item}</ListLink>
              </ListItem>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderLists;
