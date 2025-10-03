'use client';

export default function Error(error: Error) {
  <p>Could not fetch note details. {error.message}</p>;
}
