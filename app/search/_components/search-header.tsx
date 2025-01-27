"use client";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface SearchHeaderProps {
  resultCount: number;
  searchTerm: string;
  
}

export function SearchHeader({
  resultCount,
  searchTerm,
}: SearchHeaderProps) {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/search">Search Results</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Search</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h3 className="text-xs md:text-sm font-semibold text-gray-600 mb-2">
          {resultCount} Results for {searchTerm} found
        </h3>
      </div>
    
    </div>
  );
}
