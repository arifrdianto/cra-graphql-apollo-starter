import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { GoGitPullRequest, GoLaw } from 'react-icons/go';
import { ItemRepo } from './types';

export interface ListRepoItemProps {
  item: ItemRepo;
}

export const ListRepoItem = ({ item }: ListRepoItemProps) => {
  return (
    <li className="p-4" key={item.id}>
      <h3>
        <a href={item.url} className="text-lg font-semibold text-blue-400">
          {item.name}
        </a>
        <span className="px-2 ml-3 text-xs text-gray-400 border border-gray-400 border-solid rounded-full">
          {item.visibility}
        </span>
      </h3>
      <p className="text-gray-500">{item.description}</p>
      <div className="flex flex-auto mt-2">
        {!!item.languages.nodes.length && (
          <span className="flex items-center mr-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: item.languages.nodes[0]?.color,
              }}
            />
            <span className="ml-1 text-xs text-gray-400">{item.languages.nodes[0]?.name}</span>
          </span>
        )}
        {!!item.licenseInfo && (
          <span className="flex items-center mr-3 text-xs text-gray-400">
            <GoLaw color="#9ca3af" size={16} className="mr-1" />
            {item.licenseInfo.name}
          </span>
        )}
        <span className="flex mr-3 text-xs text-gray-400">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-1"
          >
            <path
              fill="rgb(156, 163, 175)"
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            />
          </svg>
          {item.stargazerCount}
        </span>
        <span className="flex mr-3 text-xs text-gray-400">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-1"
          >
            <path fill="rgb(156, 163, 175)" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path
              fill="rgb(156, 163, 175)"
              fillRule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
            />
          </svg>
          {item.issues.totalCount}
        </span>
        <span className="flex items-center mr-3 text-xs text-gray-400">
          <GoGitPullRequest color="#9ca3af" size={16} className="mr-1" />
          {item.pullRequests.totalCount}
        </span>
        <span className="text-xs text-gray-400">
          Updated on{' '}
          {formatDistanceToNow(new Date(item.updatedAt), { includeSeconds: true, addSuffix: true })}
        </span>
      </div>
    </li>
  );
};
