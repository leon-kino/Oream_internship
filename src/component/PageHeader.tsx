import Link from 'next/link';

export const PageHeader: React.FC = () => (
  <div className=''>
    <div className='flex justify-between py-3'>
      <Link href='https://o-ream.com'>
        <a>
          <h1 className='my-auto pl-3 text-2xl font-bold text-black'>Oream</h1>
        </a>
      </Link>
      {/* PC版 */}
      <div className='hidden items-center justify-between md:flex'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf_fYE8Zcp5ebGru4kKoxXmLj8iSmL4CR-ZJLU9b4EOBkDyXg/viewform?usp=sf_link'>
          <p className='mr-12 cursor-pointer text-lg font-bold text-black hover:opacity-50'>
            お問い合わせ
          </p>
        </a>
      </div>
    </div>
    <hr className='border-black' />
  </div>
);
