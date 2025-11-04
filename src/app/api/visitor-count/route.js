import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const COUNTER_FILE = path.join(process.cwd(), 'visitor-count.json');

// Initialize counter file if it doesn't exist
function initializeCounter() {
  if (!fs.existsSync(COUNTER_FILE)) {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: 1000 }), 'utf-8');
  }
}

// Read current count
function getCount() {
  try {
    initializeCounter();
    const data = fs.readFileSync(COUNTER_FILE, 'utf-8');
    const count = JSON.parse(data).count;
    // If count is less than 1000, set it to 1000
    return count < 1000 ? 1000 : count;
  } catch (error) {
    console.error('Error reading counter:', error);
    return 1000;
  }
}

// Increment count
function incrementCount() {
  try {
    initializeCounter();
    const currentCount = getCount();
    const newCount = currentCount + 1;
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: newCount }), 'utf-8');
    return newCount;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return getCount();
  }
}

export async function GET() {
  const count = getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = incrementCount();
  return NextResponse.json({ count });
}

