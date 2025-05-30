import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Gallery',
  description: 'The gallery of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Gallery' />
      <Content />
    </>
  );
};

export default Page;
