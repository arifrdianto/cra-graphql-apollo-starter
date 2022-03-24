import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button';
import shortenLargeNumber from 'lib/shortenLargeNumber';
import { ItemRepo, ListRepo, UserData } from 'components/ListRepo';
import { GET_REPO_LIST } from 'components/ListRepo/query';

function Repositories() {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const after = searchParams.get('after');
  const before = searchParams.get('before');

  const { error, loading, data } = useQuery<UserData>(GET_REPO_LIST, {
    variables: {
      username,
      after,
      before,
    },
  });

  if (error) {
    return (
      <pre>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </pre>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <img
          className="mx-auto rounded-full"
          src={data?.user.avatarUrl}
          alt=""
          width="260"
          height="260"
        />
        <div className="py-3">
          <h1 className="text-xl font-semibold">{data?.user.name}</h1>
          <span className="text-gray-400">{data?.user.login}</span>
        </div>
        <p className="mb-2 text-sm text-gray-500">{data?.user.bio}</p>
        <div className="flex items-center mb-2">
          <span className="mr-2 text-xs">
            <span className="font-semibold">
              {shortenLargeNumber(data?.user.followers.totalCount ?? 0, 1)}
            </span>{' '}
            followers
          </span>
          &middot;
          <span className="ml-2 text-xs">
            <span className="font-semibold">
              {shortenLargeNumber(data?.user.following.totalCount ?? 0, 0)}
            </span>{' '}
            following
          </span>
        </div>
        <ul className="text-sm">
          <li className="flex items-center">{data?.user.company}</li>
          <li className="flex items-center">{data?.user.location}</li>
          <li className="flex items-center">{data?.user.email}</li>
          <li className="flex items-center">{data?.user.websiteUrl}</li>
          <li className="flex items-center">{data?.user.twitterUsername}</li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="mb-4">
          <ListRepo isLoading={loading} nodes={data?.user.repositories.nodes as ItemRepo[]} />
        </div>
        <div className="flex justify-center text-lg rounded-lg" role="group">
          <Link
            to={`/${username}/repositories?before=${data?.user.repositories.pageInfo.startCursor}`}
          >
            <Button
              className="rounded-l-lg"
              size="small"
              disabled={!data?.user.repositories.pageInfo.hasPreviousPage}
            >
              Prev
            </Button>
          </Link>
          <Link
            to={`/${username}/repositories?after=${data?.user.repositories.pageInfo.endCursor}`}
          >
            <Button
              className="rounded-r-lg"
              size="small"
              disabled={!data?.user.repositories.pageInfo.hasNextPage}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Repositories;
