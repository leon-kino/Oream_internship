import { TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton } from 'react-share';
export const PageFooter: React.FC = () => (
  <div className='absolute bottom-0 w-full bg-gray'>
    <p className='pt-16 text-center text-black'>SNS で共有する？</p>
    <div className='flex justify-center pt-3'>
      <div className='mx-6'>
        <TwitterShareButton
          url='https://intern.o-ream.com'
          title='高校生専用インターンシップ紹介サイト! Oeram/オリーム'
          via='1re0n'
          related={['1re0n']}
          hashtags={['高校生インターン']}
        >
          <TwitterIcon size={62} borderRadius={10} />
        </TwitterShareButton>
      </div>
      <div className='mx-6'>
        <FacebookShareButton
          url='https://intern.o-ream.com'
          quote='高校生専用インターンシップ紹介サイト! Oeram/オリーム'
          hashtag='高校生インターン'
        >
          <FacebookIcon size={62} borderRadius={10} />
        </FacebookShareButton>
      </div>
    </div>
    <p className='mx-auto w-max py-7 text-black'>© Oream</p>
  </div>
);
