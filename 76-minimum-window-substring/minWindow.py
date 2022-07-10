import collections


def found_target(missing_count):
    return missing_count == 0


def minWindow(search_string, target):
    missing_letter_counts = collections.Counter(target)
    start = 0
    end = 0
    min_window = ""
    missing_count = len(target)

    for end in range(len(search_string)):
        # 1. Walk the end of the window forward by one step.
        # ------------------------------------------------------------

        # If we see a target letter, decrease the total target letter count
        if missing_letter_counts[search_string[end]] > 0:
            missing_count -= 1

        # Decrease the letter count for the current letter
        # If the letter is not a target letter, the count becomes negative
        missing_letter_counts[search_string[end]] -= 1

        # 2. Walk the start of the window forward by however many
        #    steps until we don't have the complete set of letters
        #    anymore.
        # ------------------------------------------------------------

        # If all letters in the target are found:
        while found_target(missing_count):
            window_length = end - start + 1  # +1 because we're inclusive of start/end

            # If this is the first time we've found a matching window,
            # or the window that we've found is smaller than the
            # previous window, then set the new min_window.
            if not min_window or window_length < len(min_window):
                min_window = search_string[start:end+1]

            # We're going to move the start forward by one letter, so
            # make sure to keep track of the fact that our window now
            # contains one less instance of that letter.
            missing_letter_counts[search_string[start]] += 1

            # If all target letters have been seen and now, a target letter is
            # seen with count > 0, then increase the target length to be
            # found. This will break out of the loop.
            if missing_letter_counts[search_string[start]] > 0:
                missing_count += 1

            start += 1

    return min_window


s = "ADOBECODEBANC"
t = "ABC"
minWindow(s, t)
