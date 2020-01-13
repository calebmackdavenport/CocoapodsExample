Pod::Spec.new do |s|
  s.name         = "CocoapodExample"
  s.version      = "1.0.0"
  s.summary      = "example cocoapod dependency"
  s.author       = "CMD"
  s.homepage     = "https://google.com"
  s.license      = "MIT"
  s.platform     = :ios, "9.0"
  s.source       = { :http => 'file:' + __dir__ + '/' }
  s.source_files = '**/*.{h,m}'
  s.dependency "React"
end
