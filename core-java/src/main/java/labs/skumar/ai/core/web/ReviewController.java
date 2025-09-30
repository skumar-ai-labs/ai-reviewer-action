package labs.skumar.ai.core.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

record ReviewRequest(@NotBlank String filePath, @NotBlank String content) {}
record ReviewResponse(List<String> comments) {}

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    @PostMapping(path="/readability", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public ReviewResponse readability(@RequestBody ReviewRequest req) {
        List<String> comments = new ArrayList<>();
        if (req.content().length() > 2000) {
            comments.add("Large file: " + req.filePath() + " — consider splitting.");
        }
        if (!req.content().contains("\n\n")) {
            comments.add("Add paragraph breaks for readability in " + req.filePath());
        }
        return new ReviewResponse(comments);
    }
}
