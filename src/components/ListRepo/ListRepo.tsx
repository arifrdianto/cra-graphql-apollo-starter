import React from 'react';
import logo from '../../logo.svg';
import '../../styles/App.css';
import { ListRepoItem } from './ListRepoItem';
import { ItemRepo } from './types';

interface ListRepoProps {
  nodes: ItemRepo[];
  isLoading: boolean;
}

export const ListRepo = ({ nodes, isLoading }: ListRepoProps) => {
  if (isLoading) return <img src={logo} className="App-logo" alt="logo" />;

  if (nodes.length)
    return (
      <div className="bg-white border border-gray-300 border-solid rounded-lg">
        <ul className="divide-y divide-gray-300">
          {nodes.map((item: ItemRepo) => (
            <ListRepoItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );

  return <span>No repositories available</span>;
};
