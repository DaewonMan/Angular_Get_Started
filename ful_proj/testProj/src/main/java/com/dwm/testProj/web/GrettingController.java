package com.dwm.testProj.web;

import com.dwm.testProj.service.GreetingService;

@RestController
@RequiredArgsConstructor
public class GrettingController {
    private final GreetingService greetingService;

    @GetMapping("/greeting")
    public String greeting() {
        return greetingService.greeting();
    }
}
